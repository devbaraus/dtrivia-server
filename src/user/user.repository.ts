import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { CoreRepository } from "../core/core.repository";
import { PrismaService } from "../prisma";
import { User } from "./entity";

@Injectable()
export class UserRepository implements CoreRepository<User> {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data });
  }

  async findAll(skip?: number, take?: number, where?: Prisma.UserWhereInput, orderBy?: Prisma.UserOrderByWithRelationInput) {
    return this.prismaService.user.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }

  async remove(id: number) {
    await this.prismaService.user.delete({ where: { id } });
    return null;
  }

  update(id: number, entity: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: { id },
      data: entity,
    });
  }
}