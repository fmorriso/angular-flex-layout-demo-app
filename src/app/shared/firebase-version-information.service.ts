import { Injectable } from '@angular/core';
//
import { SDK_VERSION } from '@angular/fire/app';
//
@Injectable({
  providedIn: 'root'
})
export class FirebaseVersionInformationService {
  public get versionFull(): string {
    return SDK_VERSION;
  }
  constructor() { }
}
