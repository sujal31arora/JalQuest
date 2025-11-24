package com.jalquest.Jalquest.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")  // 👈 Add this!
    private boolean completed = false;
}
