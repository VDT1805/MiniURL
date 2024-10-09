package com.vdtoan.miniurl_backend.services.impl;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import com.vdtoan.miniurl_backend.domains.UrlRequestDTO;
import com.vdtoan.miniurl_backend.domains.UrlResponseDTO;
import com.vdtoan.miniurl_backend.exceptions.UrlNotFoundException;
import com.vdtoan.miniurl_backend.models.UrlModel;
import com.vdtoan.miniurl_backend.repositories.UrlRepository;
import com.vdtoan.miniurl_backend.services.UrlService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UrlServiceImpl implements UrlService {

    @Autowired
    private UrlRepository repo;

    @Override
    public UrlResponseDTO createShortUrl(UrlRequestDTO urlRequestDTO, HttpServletRequest request) {
        String id = RandomStringUtils.randomAlphanumeric(6,10); //The url shortcode
        while (repo.existsById(id)) {
            // Generate a new shortcode
            id = RandomStringUtils.randomAlphanumeric(6,10); //Randomly create a short code 6-10 characters long
            
        }
        repo.save(new UrlModel(id, urlRequestDTO.originalUrl(), LocalDateTime.now(), LocalDateTime.now().plusMinutes(urlRequestDTO.expireAfter())));

        // String redirectURL = request.getRequestURL().toString().replace("api/shorten",id);
        
        return new UrlResponseDTO(id, urlRequestDTO.originalUrl());
    }

    // @Override
    // public HttpHeaders redirect(String shortCode) {
    //     UrlModel url = repo.findById(shortCode).orElseThrow(() -> new UrlNotFoundException(shortCode));
    //     HttpHeaders headers = new HttpHeaders();
    //     // throw new UnsupportedOperationException(URI.create(url.getOriginalUrl()).toString());
    //     headers.setLocation(URI.create(url.getOriginalUrl()));
    //     return headers;
    // }

    @Override
    public String getOriginalUrl(String shortCode) {
        UrlModel url = repo.findById(shortCode).orElseThrow(() -> new UrlNotFoundException(shortCode)); 
        return url.getOriginalUrl();
    }

}
