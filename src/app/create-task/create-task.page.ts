import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';

import { TaskService } from '../services/task/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fireBaseService: TaskService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  public salvarTask() {
    this.fireBaseService.create(this.formulario.value)
      .then((data) => {
        console.log(data);
        this.mostrarToast("Item Salvo com Sucesso!");
        this.formulario.reset();
      }, (error) => {
        console.log(error);
        this.mostrarToast("Ocorreu um Erro!");
    });
  }

  private async mostrarToast(mensagem: string) {
    console.log(mensagem);
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'top'
    });
    console.log(toast);
    await toast.present();
  }

  private setarFormulario() {
    this.formulario = this.formBuilder.group({
      title: [ , Validators.required],
      description: [ , Validators.required]
    });
  }

}
