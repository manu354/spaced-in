import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const Simple = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><span className="jr-link">Home</span></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="mb-0">
        <BreadcrumbItem><span className="jr-link">Home</span></BreadcrumbItem>
        <BreadcrumbItem><span className="jr-link">Library</span></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Simple;