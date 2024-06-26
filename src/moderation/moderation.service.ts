import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class ModerationService {
  constructor(@InjectQueue('moderation') private moderationQueue: Queue) {}

  async moderate(product_id: Number) {
    this.moderationQueue.add('moderate', {
      product_id
    });
  }

  async getJobs() {
    return await this.moderationQueue.getJobs(['active', 'completed']);
  }
  
}