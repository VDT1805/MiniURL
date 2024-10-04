package com.vdtoan.miniurl_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vdtoan.miniurl_backend.models.UrlModel;

public interface UrlRepository extends MongoRepository<UrlModel, String> {


}
