package com.vdtoan.miniurl_backend.domains;

public record UrlRequestDTO(String originalUrl, String currentUrl, int expireAfter) {

} 
