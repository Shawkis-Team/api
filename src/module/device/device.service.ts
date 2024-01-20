import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceDto } from 'src/dto/device';
import { Device } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
  constructor(@InjectRepository(Device) private device: Repository<Device>) {}
  async cretaeDevice(device: DeviceDto) {
    return await this.device.save(this.device.create(device));
  }
  async getDevices() {
    return await this.device.find();
  }
  async updateDevice(device: DeviceDto) {
    try {
      return this.device.update({ id: device.id }, device);
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async getDeviceById(id: number) {
    try {
      return await this.device.findOne({
        where: { id },
      });
    } catch (error) {}
  }
}
