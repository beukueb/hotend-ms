import { TestBed, inject } from '@angular/core/testing';

import { RenderTemplateFunctionsService } from './render-template-functions.service';

describe('RenderTemplateFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenderTemplateFunctionsService]
    });
  });

  it('should be created', inject([RenderTemplateFunctionsService], (service: RenderTemplateFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
