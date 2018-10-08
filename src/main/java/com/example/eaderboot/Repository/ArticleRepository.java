package com.example.eaderboot.Repository;

import com.example.eaderboot.Domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article,Integer> {
}
