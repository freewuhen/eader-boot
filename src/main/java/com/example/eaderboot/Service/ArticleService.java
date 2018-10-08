package com.example.eaderboot.Service;

import com.example.eaderboot.Domain.Article;
import com.example.eaderboot.Repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {
    private @Autowired ArticleRepository articleRepository;
    private Integer size = 5;
    public Boolean existbyid(Integer aid) {
        Article article = null;
        try{
            article = articleRepository.findById(aid).get();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }

    }
    public Page<Article> getArticleList(Integer page)
    {
        Sort sort  = new Sort(Sort.Direction.ASC,"aid");
        Pageable pageable = PageRequest.of(page,size,sort);
        Page<Article> articles  = articleRepository.findAll(pageable);
        return articles;
    }

    public Article getComByCid(Integer aid)
    {
        return articleRepository.findById(aid).get();
    }

}
