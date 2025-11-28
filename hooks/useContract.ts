// hooks/useContract.ts
"use client"

import { useState } from "react"
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"
import { readContract } from "@wagmi/core"
import { config } from "@/lib/wagmi"

export const useGradeContract = () => {
  const { address } = useAccount()

  const [isLoading, setIsLoading] = useState(false)
  const [studentGrade, setStudentGrade] = useState<number | null>(null)

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const assignGrade = async (student: string, grade: number) => {
    if (!student) return
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: "assignGrade",
        args: [student as `0x${string}`, BigInt(grade)],
      })
    } catch (err) {
      console.error("Error assigning grade:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const fetchGrade = async (student: string) => {
    try {
      setIsLoading(true)
      const result = await readContract(config, {
        address: contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: "getGrade",
        args: [student as `0x${string}`],
      })
      setStudentGrade(Number(result ?? 0))
    } catch (err) {
      console.error("Error fetching grade:", err)
      setStudentGrade(null)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      studentGrade,
    },
    actions: {
      assignGrade,
      fetchGrade,
    },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
