// components/sample.tsx
"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useGradeContract } from "@/hooks/useContract"
import { isAddress } from "viem"
import StarBorder from "./StarBorder"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = useGradeContract()

  const [studentAddress, setStudentAddress] = useState("")
  const [grade, setGrade] = useState("")
  const [queryAddress, setQueryAddress] = useState("")

  const handleAssign = async () => {
    if (!studentAddress || !grade || !isAddress(studentAddress)) return
    await actions.assignGrade(studentAddress, Number(grade))
    setStudentAddress("")
    setGrade("")
  }

  const handleFetch = async () => {
    if (!queryAddress || !isAddress(queryAddress)) return
    await actions.fetchGrade(queryAddress)
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-white text-lg">Please connect your wallet to continue.</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-2xl">
      <h1 className="text-4xl font-bold text-white text-center">Grading System</h1>

      <div className="space-y-3 bg-black/50 p-4 rounded-lg border border-blue-500/20">
        <h2 className="text-xl font-semibold text-cyan-400">Assign Grade</h2>
        <input
          type="text"
          placeholder="Student address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
          className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-cyan-500/50 rounded focus:border-cyan-400 focus:outline-none placeholder-gray-500 font-mono"
        />
        <input
          type="number"
          placeholder="Grade (0-100)"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-cyan-500/50 rounded focus:border-cyan-400 focus:outline-none placeholder-gray-500"
        />
        <StarBorder
          as="button"
          color="white"
          speed="3s"
          onClick={handleAssign}
          disabled={state.isLoading}
          className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors disabled:opacity-50"
        >
          {state.isLoading ? "Processing..." : "Assign Grade"}
        </StarBorder>
      </div>

      <div className="space-y-3 bg-black/50 p-4 rounded-lg border border-green-500/20">
        <h2 className="text-xl font-semibold text-emerald-400">Check Grade</h2>
        <input
          type="text"
          placeholder="Student address"
          value={queryAddress}
          onChange={(e) => setQueryAddress(e.target.value)}
          className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-emerald-500/50 rounded focus:border-emerald-400 focus:outline-none placeholder-gray-500 font-mono"
        />
        <StarBorder
          as="button"
          color="white"
          speed="3s"
          onClick={handleFetch}
          disabled={state.isLoading}
          className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition-colors disabled:opacity-50"
        >
          {state.isLoading ? "Fetching..." : "Get Grade"}
        </StarBorder>

        {data.studentGrade !== null && data.studentGrade !== undefined && (
          <p className="text-lg font-semibold text-white bg-gray-900 p-3 rounded border border-cyan-500/30">
            Grade: <span className="text-cyan-400 font-bold">{data.studentGrade}</span>
          </p>
        )}
      </div>

      {state.hash && (
        <div className="p-4 bg-gray-900 border-2 border-yellow-500/30 rounded">
          <p className="font-mono break-all text-yellow-400 text-sm">Tx: {state.hash}</p>
        </div>
      )}

      {state.error && <p className="text-red-400 bg-red-900/20 p-3 rounded border border-red-500/30 text-center">Error: {state.error.message}</p>}
    </div>
  )
}

export default SampleIntregation
