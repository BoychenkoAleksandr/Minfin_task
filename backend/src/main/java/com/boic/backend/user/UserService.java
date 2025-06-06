package com.boic.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserJpaMapper userJpaMapper;
    private final UserRepository userRepository;

    @Transactional
    public User findByUsernameIgnoreCase(String username) {
        return userJpaMapper.fromJpaEntity(userRepository.findByUsernameIgnoreCase(username)
                .orElse(null));
    }

    @Transactional
    public User persist(User user) {
        return userJpaMapper.fromJpaEntity(
                userRepository.save(
                        userJpaMapper.toJpaEntity(user)));
    }
}
