import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/global-services/api-service/api.service';
import { LoaderService } from 'src/app/services/global-services/loader-service/loader.service';
import { UtilsService } from 'src/app/services/global-services/utils-service/utils.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent {
  title = 'Servant';
  public disabledButton = false;

  constructor(
    private loaderService: LoaderService,
    private utils: UtilsService,
    private apiService: ApiService
    ) {}

  public testLoader(): void {
    this.loaderService.showLoader();
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2000);
  }
  public getBoredApi(): void {
    this.apiService.get(`https://www.boredapi.com/api/activity`, {changeApi: null, params: {key: 'TestKey'}}).subscribe((dataBored: any) => {
      console.log(dataBored, 'dataBored');
    });
  }

  public getNoLoaderBoredApi(): void {
    this.apiService.getNotLoader(`https://www.boredapi.com/api/activity`).subscribe((dataBored: any) => {
      console.log(dataBored, 'dataBored NoLoader');
    });
  }

  public setDisabled(): void {
    this.disabledButton = !this.disabledButton;
  }

  public testDialog(): void {
    this.utils.openStandardAlert('Test Header','Test Content')
  }

  public async testConfirmDialogDefButtons(): Promise<void> {
    try {
      const test = await this.utils.openConfirmAlert('Test ConfirmHeader', 'Test ConfirmContent');
      console.log(test, 'test');
    } catch(err) {
      console.error(err, 'testConfirmError');
    }
  }

  public testConfirmDialogSetButtons(): void {
    this.utils.openConfirmAlert('Test ConfirmHeader', 'Test ConfirmContent', 'OKButton', 'CancelButton');
  }

  public getAllPosts(): void {
    this.apiService.get('http://localhost:3000/posts').subscribe((data: any) => {
      console.log('data All Post', data);
      // narzie bez catch ale to później
    });
  }

  public getPostById(id: number): void {
    this.apiService.get(`http://localhost:3000/posts/${id}`).subscribe((data: any) => {
      console.log('data By id', data);
      // narzie bez catch ale to później
    });
  }

  public getPostByFilters(filter: string): void {
    this.apiService.get(`http://localhost:3000/posts?_sort=${filter}`).subscribe((data: any) => {
      console.log('data sorted min to max Post', data);
      // narzie bez catch ale to później
    });
  }
  public filtersTest = {
    name: 'NameTest',
    surName: 'SurNameTest'
  } 
  public getPostByfilters2(filters: any): void {
    this.apiService.getWithHttpParams('https://www.boredapi.com/api/activity', filters).subscribe((data: any) => {
      console.log('data Bored Api with filters', data);
    });
  }

  public getPostByFiltersDesc(filter: string): void {
    this.apiService.get(`http://localhost:3000/posts?_sort=${filter}&_order=desc`).subscribe((data: any) => {
      console.log('data sorted max to min Post', data);
      // narzie bez catch ale to później
    });
  }

  public makeNewPost(): void {
    const newPostbody = {
      tittle: 'nowy Post',
      body: 'Body nowego postu',
      likes: 18,
      favs: [
        {favname: 'acdc', rate: 10},
        {favname: 'rollingStonse', rate: 5},
        {favname: 'metallica', rate: 7}
      ]
    }
    this.apiService.post('http://localhost:8000/products',newPostbody).subscribe((data: any) => {
      console.log('Post newPostBody', data);
    });
  }

  public deletePost(id: number): void {
    this.apiService.delete(`http://localhost:3000/posts/${id}`).subscribe((data:any) => {
      console.log('Delete Post by Id', data);
    });
  }

  public searchPost(searchValue: string): void {
    this.apiService.get(`http://localhost:3000/posts?_sort=id&q=${searchValue}`).subscribe((data: any) => {
      console.log('search Data', data);
    });
  }

  public searchPostfull(searchValue: string): void {
    this.apiService.get(`http://localhost:3000/posts?q=${searchValue}`).subscribe((data: any) => {
      console.log('search Data', data);
    });
  }

  public getAuthorization(): void {
    const data = {
      email: 'nilson@email.com',
      password: 'nilson'
    }
    this.apiService.post(`http://localhost:8000/auth/login`, data).subscribe((data: any) => {
      console.log('Get authorization token', data);
    });
  }

  public authGetProducts(): void {
    this.apiService.get(`http://localhost:8000/products`).subscribe((data: any) => {
      console.log('Get Products Data', data);
    });
  }

}
