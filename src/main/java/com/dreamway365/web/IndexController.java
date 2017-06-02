package com.dreamway365.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by qiufeng on 2017/6/2.
 */
@Controller
public class IndexController {

    @RequestMapping("index")
    String index(ModelMap modelMap) {

        return "index";
    }

}
