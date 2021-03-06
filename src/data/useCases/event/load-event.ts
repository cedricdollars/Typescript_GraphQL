import Event from "@/domain/entities/event/event";
import { LoadEvent } from "@/domain/usesCases/events/loadEvent";
import { LoadEventRepository } from "../../protocols/event/load-event-repository";

export class LoadEventMemory implements LoadEvent {
  constructor(private loadEventRepository: LoadEventRepository) {}

  async load(id: string): Promise<Event> {
    const event = await this.loadEventRepository.load(id);
    return event;
  }
  async getAll(): Promise<Event[]> {
    return await this.loadEventRepository.getAll();
  }
}
