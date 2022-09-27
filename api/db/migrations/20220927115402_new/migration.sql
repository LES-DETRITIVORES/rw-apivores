/*
  Warnings:

  - A unique constraint covering the columns `[workerId,start,end]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Task_workerId_start_end_key" ON "Task"("workerId", "start", "end");
