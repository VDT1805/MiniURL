package com.vdtoan.miniurl_backend.exceptions;

public class UrlNotFoundException extends RuntimeException {

    public UrlNotFoundException(String url) {
        super("URL not found: " + url);
    }

}
