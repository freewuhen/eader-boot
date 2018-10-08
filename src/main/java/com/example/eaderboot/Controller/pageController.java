package com.example.eaderboot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class pageController {
    @GetMapping("/")
    String getIndexPage()
    {
        return "index";
    }
    @GetMapping("/{name}")
    String getAllPage(@PathVariable("name") String name)
    {
        return name;
    }


}
