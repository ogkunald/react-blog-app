package com.blog.nzera.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.nzera.model.Blogs;

@Repository
public interface BlogsRepository extends JpaRepository<Blogs, Long> {
	
	void deleteBlogsById(Long id);
	
	Optional<Blogs> findBlogsById(Long id);
}
