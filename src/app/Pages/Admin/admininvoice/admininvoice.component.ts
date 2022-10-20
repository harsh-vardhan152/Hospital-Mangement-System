import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF, { jsPDFAPI } from 'jspdf';
@Component({
  selector: 'app-admininvoice',
  templateUrl: './admininvoice.component.html',
  styleUrls: ['./admininvoice.component.css'],
})
export class AdmininvoiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('content', { static: false }) el!: ElementRef;

  makePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('invoice.pdf');
      },
    });
  }
}
