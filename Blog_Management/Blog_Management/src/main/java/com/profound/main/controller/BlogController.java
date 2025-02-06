package com.profound.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.profound.main.model.Post;
import com.profound.main.service.PostService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
public class BlogController {

	@Autowired
	private PostService postService;

	
	@GetMapping("/posts")
	public ResponseEntity<List<Post>> getAllPosts() {
		return ResponseEntity.ok(postService.getAllPosts());
	}

	@PostMapping("/posts")
	public ResponseEntity<Post> createPost(@RequestBody Post post) {
		return ResponseEntity.ok(postService.createPost(post));
	}

	@GetMapping("posts/{id}")
	public ResponseEntity<Post> getPostById(@PathVariable Long id) {
		Post post = postService.getPostById(id);
		if (post == null) {
			throw new RuntimeException("Post not found with id: " + id);
		}
		return ResponseEntity.ok(post);
	}

	@PutMapping("edit/{id}")
	public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post post) {
		Post updatedPost = postService.updatePost(id, post);
		if (updatedPost == null) {
			throw new RuntimeException("Post not found with id: " + id);
		}
		return ResponseEntity.ok(updatedPost);
	}

	@DeleteMapping("delete/{id}")
	public ResponseEntity<Void> deletePost(@PathVariable Long id) {
		Post post = postService.getPostById(id);
		if (post == null) {
			throw new RuntimeException("Post not found with id: " + id);
		}
		postService.deletePost(id);
		return ResponseEntity.noContent().build();
	}

}
