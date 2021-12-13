package com.blog.nzera.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="blogs")
@Data
public class Blogs {
	@Id
	@GeneratedValue
	@Column(nullable = false,updatable = false)
	private long id;
	
	private String title;
	@Column(length = 1000)
	private String body;
	private String author;
	
}
