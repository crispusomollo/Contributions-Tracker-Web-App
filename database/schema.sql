-- Create Database
CREATE DATABASE IF NOT EXISTS contribution_tracker;
USE contribution_tracker;

-- ================================
-- Users Table (Admin Login)
-- ================================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- Contributors Table
-- ================================
CREATE TABLE contributors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- Contributions Table
-- ================================
CREATE TABLE contributions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contributor_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    contribution_date DATE NOT NULL,
    payment_method VARCHAR(50),
    reference_number VARCHAR(100),
    description TEXT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (contributor_id) REFERENCES contributors(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- ================================
-- Audit Logs Table
-- ================================
CREATE TABLE audit_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(100),
    module VARCHAR(100),
    record_id INT,
    description TEXT,
    ip_address VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ================================
-- Backup Table
-- ================================
CREATE TABLE backups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255),
    file_path TEXT,
    backup_type VARCHAR(50),
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- ================================
-- Restore Table
-- ================================
CREATE TABLE restores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    backup_id INT,
    restored_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (backup_id) REFERENCES backups(id),
    FOREIGN KEY (restored_by) REFERENCES users(id)
);

-- ================================
-- Export Logs Table
-- ================================
CREATE TABLE export_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    export_type VARCHAR(50),
    date_range VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ================================
-- Indexes for Performance
-- ================================
CREATE INDEX idx_contribution_date 
ON contributions(contribution_date);

CREATE INDEX idx_contributor_id 
ON contributions(contributor_id);

CREATE INDEX idx_contributor_phone
ON contributors(phone);
