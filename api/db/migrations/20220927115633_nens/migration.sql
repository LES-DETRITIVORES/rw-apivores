/*
  Warnings:

  - A unique constraint covering the columns `[id,workerId,customerId,siteId,containerId,materialId,serviceId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Task_workerId_start_end_key";

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_workerId_customerId_siteId_containerId_materialId_serviceId_key" ON "Task"("id", "workerId", "customerId", "siteId", "containerId", "materialId", "serviceId");
