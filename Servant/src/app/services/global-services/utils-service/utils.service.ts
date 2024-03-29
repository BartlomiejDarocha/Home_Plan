import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/components/global/utils/confirm-alert/confirm-alert.component';
import { ConfirmAlertInterFace, StandardAlertInterFace } from 'src/app/components/global/utils/models';
import { StandardAlertComponent } from 'src/app/components/global/utils/standard-alert/standard-alert.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public dialog: MatDialog) { }

  public openStandardAlert(header: string, content: string): void {
    const message = { header, content}
    const dialog = this.dialog.open(StandardAlertComponent, {
      data: message
    });
  }

  public async openConfirmAlert(header: string, content: string, confirmButton?: string | null, cancelButton?: string | null): Promise<Boolean> {
    let confirmData: ConfirmAlertInterFace = {
      header: '',
      content: '',
      confirmButton: 'Ok',
      cancelButton: 'Anuluj'
    }
    confirmData.header = header;
    confirmData.content = content;
    if (confirmButton) {
      confirmData.confirmButton = confirmButton;
    }
    if (cancelButton) {
      confirmData.cancelButton = cancelButton;

    }
    const dialog = this.dialog.open(ConfirmAlertComponent, {
      data: confirmData
    });
    return await dialog.afterClosed().toPromise();
  }
}
