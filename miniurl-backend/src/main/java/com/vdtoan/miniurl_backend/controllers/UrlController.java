package com.vdtoan.miniurl_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.vdtoan.miniurl_backend.domains.UrlRequestDTO;
import com.vdtoan.miniurl_backend.domains.UrlResponseDTO;
import com.vdtoan.miniurl_backend.services.UrlService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class UrlController {
    @Autowired
    private UrlService urlService;

    @PostMapping("/shorten")
    public ResponseEntity<UrlResponseDTO> postMethodName(@RequestBody UrlRequestDTO data, HttpServletRequest request) {
        //process POST request
        return ResponseEntity.ok(urlService.createShortUrl(data, request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Void> getMethodName(@PathVariable("id") String id) {
        //Todo: process GET request
        return null;
    }
    
    
}
