CREATE DATABASE MockProjects
GO

USE [MockProjects]
GO

CREATE SCHEMA [StudentHub];
GO

CREATE TABLE StudentHub.Users(
    [StudentId] INT IDENTITY(1,1) PRIMARY KEY,
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [Profile] NVARCHAR(1000) NOT NULL,
    [Description] NVARCHAR(1000) NOT NULL,
    [Email] NVARCHAR(255) UNIQUE NOT NULL,
    [AddressText] NVARCHAR(500),
    [Latitude] DECIMAL(9,6),
    [Longitude] DECIMAL(9,6),
    [Physics] DECIMAL(5,2),
    [Chemistry] DECIMAL(5,2),
    [Maths] DECIMAL(5,2),
    [CreatedAt] DATETIME2 DEFAULT GETDATE(),
    [UpdatedAt] DATETIME2 DEFAULT GETDATE()
);
GO
