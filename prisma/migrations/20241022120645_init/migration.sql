/*
  Warnings:

  - The values [price_1OYxkqFj9oKEERu1NbKUxXxN,price_1OYxkqFj9oKEERu1KfJGWxgN] on the enum `Subscription_plan` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `subscription` MODIFY `plan` ENUM('price_1QBgvbER6kEqAWWX7eD7NjtF', 'price_1QBgvbER6kEqAWWXgfO2XdwJ') NULL;
