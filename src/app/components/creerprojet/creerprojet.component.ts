import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';
@Component({
  selector: 'app-creerprojet',
  templateUrl: './creerprojet.component.html',
  styleUrls: ['./creerprojet.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class CreerprojetComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService
  ) {
    this.title = 'Créer un projet';
    this.project = new Project('', '', '', '', 2019, '', '');
  }
  ngOnInit() {
  }
  onSubmit(form) {

    // GUARDAR LOS DATOS
    this.projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          // SUBIR LA IMAGEN
          this.uploadService.makeFileRequest(global.url + 'upload-image/' + response.project._id, [ ], this.filesToUpload, 'files')
          .then((result: any) => {
            this.status = 'success';
            console.log(result);
            form.reset();
          });
        } else {

          this.status = 'failed';
        }

    },
    error => {
          console.log(error);
    }
  );
}

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

}
