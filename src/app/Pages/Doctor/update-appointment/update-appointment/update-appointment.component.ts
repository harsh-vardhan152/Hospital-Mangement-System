import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointments } from 'src/app/Models/appointments.model';
import { AppointmentsService } from 'src/app/Services/appointments.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css'],
})
export class UpdateAppointmentComponentD implements OnInit {
  [x: string]: any;
  ap_id!: number;
  appointmentlist: Appointments = new Appointments();

  constructor(
    private apService: AppointmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ap_id = this.route.snapshot.params['ap_id'];
    this.apService.getAppointmentById(this.ap_id).subscribe(
      (data) => {
        this.appointmentlist = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.apService
      .updateAppointment(this.ap_id, this.appointmentlist)
      .subscribe(
        (data) => {
          this.registerAppointment();
        },
        (error) => console.log(error)
      );
  }
  registerAppointment() {
    swal.fire('Success', 'successfully', 'success');
    this.router.navigate(['/Doctorappointemnt']);

    (error: any) => {
      console.log(error);
      swal.fire('Error', 'Something Wrong Happend', 'error');
    };
  }
  addAppointment() {
    this.apService.addAppointment(this.appointmentlist).subscribe((data) => {
      this.registerAppointment();
    });
  }
}
