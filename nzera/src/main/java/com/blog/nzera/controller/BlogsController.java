package com.blog.nzera.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.nzera.model.Blogs;
import com.blog.nzera.service.BlogsService;

@RestController
public class BlogsController {
	
	private BlogsService blogsService;
	
	@Autowired
	public BlogsController(BlogsService blogsService) {
		this.blogsService = blogsService;
	}
	
	@GetMapping("/blogs")
	public ResponseEntity<List<Blogs>> getAllBlogs(){
		List<Blogs> blogs = blogsService.findAllBlogs();
		return new ResponseEntity<>(blogs,HttpStatus.OK);
	}
	
	@GetMapping("blogs/{id}")
	public ResponseEntity<Blogs> getBlogsById(@PathVariable("id")Long id){
		Blogs blog = blogsService.findBlogsById(id);
		return new ResponseEntity<>(blog,HttpStatus.OK);
	}
	
	@PostMapping("blogs/add")
	public ResponseEntity<Blogs> addBlogs(@RequestBody Blogs blog){
		Blogs newBlog = blogsService.addBlogs(blog);
		return new ResponseEntity<>(newBlog,HttpStatus.CREATED);
	}
	
	@PutMapping("blogs/delete/{id}")
	@Transactional
	public ResponseEntity<?> deleteBlogsById(@PathVariable("id") Long id){
		blogsService.deleteBlogs(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
