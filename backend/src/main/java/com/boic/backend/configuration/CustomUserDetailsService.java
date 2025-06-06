package com.boic.backend.configuration;

import com.boic.backend.user.User;
import com.boic.backend.user.UserJpaMapper;
import com.boic.backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserJpaMapper userJpaMapper;
    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userJpaMapper.fromJpaEntity(userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));

        return new CustomUserDetails(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                null
        );
    }
}
