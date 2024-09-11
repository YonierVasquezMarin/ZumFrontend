import { LoaderService } from '@services/loader.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  loaderService.addRequest();
  return next(req).pipe(
    finalize(() => loaderService.removeRequest()) 
  );
};
