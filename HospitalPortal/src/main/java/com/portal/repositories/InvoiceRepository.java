package com.portal.repositories;

import org.springframework.data.repository.CrudRepository;

import com.portal.entities.Invoices;

public interface InvoiceRepository extends CrudRepository<Invoices, Long>{

}
