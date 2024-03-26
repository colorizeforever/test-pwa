import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeModule,
  ScannerQRCodeConfig,
  ScannerQRCodeResult
} from "ngx-scanner-qrcode";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxScannerQrcodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  data: string = '';
  @ViewChild('scan') scanComponent!: NgxScannerQrcodeComponent;
  title = 'test-pwa';
  config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  };

  onScanReady(e: ScannerQRCodeResult[]): void {
    if (e[0]?.value) {
      this.data = e[0]?.value;
      console.log('salam', e[0].value)
    }
  }

  ngAfterViewInit() {
    this.scanComponent.start();
  }

}
