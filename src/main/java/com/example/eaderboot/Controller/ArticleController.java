package com.example.eaderboot.Controller;

import com.example.eaderboot.Domain.Article;
import com.example.eaderboot.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class ArticleController {
    private  @Autowired ArticleService articleService;
   @GetMapping(value = {"/news","/news.html"})
    String getNewsPage(Model model){
       int page = 0;
      Page<Article> articlePage = articleService.getArticleList(page);

      List<Article> articles= articlePage.getContent();

      model.addAttribute("articles",articlePage);
      model.addAttribute("currentPage",page);

       return "news";
   }
    @RequestMapping(value= {"/applyList"})
    public String applyList(Model model,Integer currentPage) {
        int page = currentPage;
        Page<Article> articlePage = articleService.getArticleList(currentPage);

        model.addAttribute("articles",articlePage);
        model.addAttribute("currentPage",page);
        return "news";
    }
}
