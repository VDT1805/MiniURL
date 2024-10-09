package com.vdtoan.miniurl_backend.services;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import com.vdtoan.miniurl_backend.domains.UrlRequestDTO;
import com.vdtoan.miniurl_backend.domains.UrlResponseDTO;

import jakarta.servlet.http.HttpServletRequest;


@Service
public interface UrlService {

    UrlResponseDTO createShortUrl(UrlRequestDTO urlRequestDTO, HttpServletRequest request);

    // HttpHeaders redirect(String shortCode);
    UrlResponseDTO getOriginalUrl(String shortCode);
} 




