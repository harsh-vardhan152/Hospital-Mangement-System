import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/Services/doctor-services.service';
import { DoctorList } from 'src/app/Models/doctor-list.model';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-page.component.html',
})
export class UpdatePage implements OnInit {
  [x: string]: any;
  d_id!: number;
  doctorlist: DoctorList = new DoctorList();

  constructor(
    private doctorlistservice: DoctorServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.d_id = this.route.snapshot.params['d_id'];
    this.doctorlistservice.getDoctorById(this.d_id).subscribe(
      (data) => {
        this.doctorlist = data;
      },
      (error) => {
        console.log(error);
        // swal.fire('Error', 'Something Wrong Happend', 'error');
      }
    );
  }
  onSubmit() {
    this.doctorlistservice.updateDoctor(this.d_id, this.doctorlist).subscribe(
      (data) => {
        this.registerDoctors();
        swal.fire('Success', 'successfully', 'success');
      },
      (error) => {
        console.log(error);
        swal.fire('Error', 'Something Wrong Happend', 'error');
      }
    );
  }
  registerDoctors() {
    swal.fire('Success', 'Doctor is updated success', 'success');
    this.router.navigate(['/doctor']);

    (error: any) => {
      console.log(error);
      swal.fire('Error', 'Something Wrong Happend', 'error');
    };
    // swal.fire('Error', 'Doctor is updated success', 'error');
  }
  addDoctor() {
    this.doctorlistservice.addDoctor(this.doctorlist).subscribe((data) => {
      this.registerDoctors();
    });
  }
}
