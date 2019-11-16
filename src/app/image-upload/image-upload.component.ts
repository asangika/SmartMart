import { Component, OnInit } from '@angular/core';
import { ImageService } from './image-service';
class ImageSnippet{
  pending: boolean = false;
  status: string = 'init';

    constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

      selectedFile: ImageSnippet;

      constructor(private imageService: ImageService){}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }



      processFile(imageInput: any){
      debugger;

      const file: File = imageInput.files[0];
      const reader = new FileReader();
      reader.addEventListener('load',(event: any) => {

        debugger;
        this.selectedFile = new ImageSnippet(event.target.result, file);

        this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        
    });

      });

      reader.readAsDataURL(file);
  }
   

  ngOnInit() {
  }

}
