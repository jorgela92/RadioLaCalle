import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Model} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class MixcloundService {
  private nameMixclound = 'LaMalditaRadio';
  private apiURL = `https://api.mixcloud.com/${this.nameMixclound}/playlists/`;
  constructor(private httpClient: HttpClient) {}

  public getPlayListsPrograms() {
    return this.httpClient.get<Model>(this.apiURL);
  }

  public getCloudcastsPrograms(id: string) {
    return this.httpClient.get<Model>(`${this.apiURL}/${id}/cloudcasts/`);
  }
}
