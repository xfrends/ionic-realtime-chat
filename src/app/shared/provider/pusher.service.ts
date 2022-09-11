import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel;
  myChannel = '';
  constructor() {
    const pusher = new Pusher('f4b7ac2af6d427203d0b', {
      cluster: 'ap1'
    });
    this.channel = pusher.subscribe('livechat');
  }

  public init() {
    return this.channel;
  }

  public unbind() {
    // Remove all handlers on `channel`
    return this.channel.unbind();
  }
}
