package com.profound.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.profound.main.model.Blogger;
import com.profound.main.service.BloggerService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
public class BloggerController {

	@Autowired
	private BloggerService bloggerService;

	@PostMapping("/signup")
	public ResponseEntity<String> registerBlogger(@RequestBody Blogger blogger) {
		boolean status = bloggerService.registerBlogger(blogger);

		if (status) {
			return ResponseEntity.status(HttpStatus.CREATED).body("Blogger Registered Successfully!");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Blogger NOT Registered due to some error.");
		}
	}

	@PostMapping("/")
	public ResponseEntity<?> loginBlogger(@RequestBody Blogger blogger, HttpServletRequest request) {
		Blogger validBlogger = bloggerService.loginAdmin(blogger.getEmail(), blogger.getPassword());

		if (validBlogger != null) {
			HttpSession session = request.getSession();
			session.setAttribute("blogger", validBlogger);

			return ResponseEntity.ok(validBlogger);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ID & password didn't match!");
		}
	}

	@PostMapping("/logout")
	public ResponseEntity<String> logoutBlogger(HttpServletRequest request, @RequestBody Blogger blogger) {
		HttpSession session = request.getSession(false);

		String name = (session != null) ? (String) session.getAttribute("name") : blogger.getName();
		if (session != null) {
			session.invalidate();
		}
		System.out.println(name);
		return ResponseEntity.ok(name);
		
	}

}
