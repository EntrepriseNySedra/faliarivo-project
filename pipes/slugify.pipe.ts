// slugify.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slugify' })
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
}
