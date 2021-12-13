package com.blog.nzera.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.nzera.exception.BlogNotFoundException;
import com.blog.nzera.model.Blogs;
import com.blog.nzera.repository.BlogsRepository;

@Service
public class BlogsService {
	
	private final BlogsRepository blogsRepo;

	@Autowired
	public BlogsService(BlogsRepository blogsRepo) {
		this.blogsRepo = blogsRepo;
	}
	
	public List<Blogs> findAllBlogs(){
		return blogsRepo.findAll();
	}
	
	public Blogs findBlogsById(Long id) {
		return blogsRepo.findBlogsById(id).orElseThrow(()-> new BlogNotFoundException("Blog by id "+id+" not found"));
	}
	
	public Blogs addBlogs(Blogs blog) {
		return blogsRepo.save(blog);
	}
	
	public void deleteBlogs(Long id) {
		blogsRepo.deleteBlogsById(id);
	}
}
