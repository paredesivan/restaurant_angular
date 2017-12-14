import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  admin: any;

  getAdminService() {

    return this.http.get("http://localhost/RestBackEnd/Controllers/admin/adminController.php?id=admin")
      .map(res => {
        this.admin = res;
        // console.log(res);
        if (this.admin._body !== 0) {
          return res.json();

        }
      })
  }


}
