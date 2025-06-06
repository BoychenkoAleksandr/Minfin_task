package com.boic.backend.user;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface UserJpaMapper {
    @Mapping(target = "username", source = "username")
    User fromJpaEntity(UserJpa jpaEntity);

    @Mapping(target = "username", source = "username")
    UserJpa toJpaEntity(User entity);
}
