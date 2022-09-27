/*
  Warnings:

  - A unique constraint covering the columns `[workerId,customerId,siteId,containerId,materialId,serviceId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Task_id_workerId_customerId_siteId_containerId_materialId_serviceId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Task_workerId_customerId_siteId_containerId_materialId_serviceId_key" ON "Task"("workerId", "customerId", "siteId", "containerId", "materialId", "serviceId");
