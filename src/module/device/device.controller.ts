import { Controller, Get, Body, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { DeviceDto } from 'src/dto/device';
import { DeviceService } from './device.service';
@ApiTags('device')
@Controller('device')
export class DeviceController {
  constructor(private service: DeviceService) {}
  @Get('')
  @ApiResponse({ type: [DeviceDto], status: 200 })
  getAllDevice() {
    return this.service.getDevices();
  }
  @Get(':id')
  getDeviceById(@Param('id') id: number) {
    return this.service.getDeviceById(id);
  }
  @Post('')
  createDevice(@Body() device: DeviceDto) {
    return this.service.cretaeDevice(device);
  }
  @Put(':id')
  updateDevice(@Param('id') id: number, @Body() device: DeviceDto) {
    return this.service.updateDevice({ ...device, id });
  }
}
