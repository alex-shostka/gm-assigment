import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserFormService {
  private CONFIG_URL = "assets/to-render.json";

  constructor(private http: HttpClient) {}

  getFormBuilderData() {
    return this.http.get<any>(this.CONFIG_URL);
  }
}
